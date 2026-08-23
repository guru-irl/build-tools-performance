import React from 'react';
const LABEL_42973 = 'component_42973';
export function Component42973({ value = 42973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42973, 'data-value': derived.doubled }, children);
}
export default Component42973;
