import React from 'react';
const LABEL_5071 = 'component_5071';
export function Component5071({ value = 5071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5071, 'data-value': derived.doubled }, children);
}
export default Component5071;
