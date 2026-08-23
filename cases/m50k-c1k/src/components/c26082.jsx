import React from 'react';
const LABEL_26082 = 'component_26082';
export function Component26082({ value = 26082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26082, 'data-value': derived.doubled }, children);
}
export default Component26082;
