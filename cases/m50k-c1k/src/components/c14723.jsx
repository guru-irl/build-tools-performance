import React from 'react';
const LABEL_14723 = 'component_14723';
export function Component14723({ value = 14723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14723, 'data-value': derived.doubled }, children);
}
export default Component14723;
