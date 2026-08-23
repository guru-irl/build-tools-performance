import React from 'react';
const LABEL_8365 = 'component_8365';
export function Component8365({ value = 8365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8365, 'data-value': derived.doubled }, children);
}
export default Component8365;
