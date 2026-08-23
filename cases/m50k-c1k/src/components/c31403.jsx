import React from 'react';
const LABEL_31403 = 'component_31403';
export function Component31403({ value = 31403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31403, 'data-value': derived.doubled }, children);
}
export default Component31403;
