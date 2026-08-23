import React from 'react';
const LABEL_32447 = 'component_32447';
export function Component32447({ value = 32447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32447, 'data-value': derived.doubled }, children);
}
export default Component32447;
