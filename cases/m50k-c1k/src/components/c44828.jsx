import React from 'react';
const LABEL_44828 = 'component_44828';
export function Component44828({ value = 44828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44828, 'data-value': derived.doubled }, children);
}
export default Component44828;
