import React from 'react';
const LABEL_34973 = 'component_34973';
export function Component34973({ value = 34973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34973, 'data-value': derived.doubled }, children);
}
export default Component34973;
