import React from 'react';
const LABEL_475 = 'component_475';
export function Component475({ value = 475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_475, 'data-value': derived.doubled }, children);
}
export default Component475;
