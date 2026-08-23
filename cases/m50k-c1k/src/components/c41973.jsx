import React from 'react';
const LABEL_41973 = 'component_41973';
export function Component41973({ value = 41973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41973, 'data-value': derived.doubled }, children);
}
export default Component41973;
