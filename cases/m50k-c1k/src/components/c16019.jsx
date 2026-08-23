import React from 'react';
const LABEL_16019 = 'component_16019';
export function Component16019({ value = 16019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16019, 'data-value': derived.doubled }, children);
}
export default Component16019;
