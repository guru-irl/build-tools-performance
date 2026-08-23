import React from 'react';
const LABEL_5214 = 'component_5214';
export function Component5214({ value = 5214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5214, 'data-value': derived.doubled }, children);
}
export default Component5214;
