import React from 'react';
const LABEL_41403 = 'component_41403';
export function Component41403({ value = 41403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41403, 'data-value': derived.doubled }, children);
}
export default Component41403;
