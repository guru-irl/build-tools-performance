import React from 'react';
const LABEL_29828 = 'component_29828';
export function Component29828({ value = 29828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29828, 'data-value': derived.doubled }, children);
}
export default Component29828;
