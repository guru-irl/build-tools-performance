import React from 'react';
const LABEL_26930 = 'component_26930';
export function Component26930({ value = 26930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26930, 'data-value': derived.doubled }, children);
}
export default Component26930;
