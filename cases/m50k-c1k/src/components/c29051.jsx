import React from 'react';
const LABEL_29051 = 'component_29051';
export function Component29051({ value = 29051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29051, 'data-value': derived.doubled }, children);
}
export default Component29051;
