import React from 'react';
const LABEL_12228 = 'component_12228';
export function Component12228({ value = 12228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12228, 'data-value': derived.doubled }, children);
}
export default Component12228;
