import React from 'react';
const LABEL_32905 = 'component_32905';
export function Component32905({ value = 32905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32905, 'data-value': derived.doubled }, children);
}
export default Component32905;
