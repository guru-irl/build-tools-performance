import React from 'react';
const LABEL_5130 = 'component_5130';
export function Component5130({ value = 5130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5130, 'data-value': derived.doubled }, children);
}
export default Component5130;
