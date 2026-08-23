import React from 'react';
const LABEL_35449 = 'component_35449';
export function Component35449({ value = 35449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35449, 'data-value': derived.doubled }, children);
}
export default Component35449;
