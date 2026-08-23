import React from 'react';
const LABEL_11295 = 'component_11295';
export function Component11295({ value = 11295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11295, 'data-value': derived.doubled }, children);
}
export default Component11295;
