import React from 'react';
const LABEL_11775 = 'component_11775';
export function Component11775({ value = 11775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11775, 'data-value': derived.doubled }, children);
}
export default Component11775;
