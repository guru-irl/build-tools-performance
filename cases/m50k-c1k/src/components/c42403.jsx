import React from 'react';
const LABEL_42403 = 'component_42403';
export function Component42403({ value = 42403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42403, 'data-value': derived.doubled }, children);
}
export default Component42403;
