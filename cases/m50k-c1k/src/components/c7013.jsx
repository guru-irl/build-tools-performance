import React from 'react';
const LABEL_7013 = 'component_7013';
export function Component7013({ value = 7013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7013, 'data-value': derived.doubled }, children);
}
export default Component7013;
