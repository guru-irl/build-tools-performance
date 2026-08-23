import React from 'react';
const LABEL_45828 = 'component_45828';
export function Component45828({ value = 45828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45828, 'data-value': derived.doubled }, children);
}
export default Component45828;
