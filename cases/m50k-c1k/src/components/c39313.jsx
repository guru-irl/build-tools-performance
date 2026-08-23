import React from 'react';
const LABEL_39313 = 'component_39313';
export function Component39313({ value = 39313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39313, 'data-value': derived.doubled }, children);
}
export default Component39313;
