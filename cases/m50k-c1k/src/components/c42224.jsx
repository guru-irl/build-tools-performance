import React from 'react';
const LABEL_42224 = 'component_42224';
export function Component42224({ value = 42224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42224, 'data-value': derived.doubled }, children);
}
export default Component42224;
