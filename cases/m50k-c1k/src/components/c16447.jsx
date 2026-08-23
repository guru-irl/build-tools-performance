import React from 'react';
const LABEL_16447 = 'component_16447';
export function Component16447({ value = 16447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16447, 'data-value': derived.doubled }, children);
}
export default Component16447;
