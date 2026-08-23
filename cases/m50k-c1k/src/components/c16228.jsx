import React from 'react';
const LABEL_16228 = 'component_16228';
export function Component16228({ value = 16228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16228, 'data-value': derived.doubled }, children);
}
export default Component16228;
