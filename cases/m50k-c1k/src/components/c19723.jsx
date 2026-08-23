import React from 'react';
const LABEL_19723 = 'component_19723';
export function Component19723({ value = 19723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19723, 'data-value': derived.doubled }, children);
}
export default Component19723;
