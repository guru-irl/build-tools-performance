import React from 'react';
const LABEL_28224 = 'component_28224';
export function Component28224({ value = 28224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28224, 'data-value': derived.doubled }, children);
}
export default Component28224;
