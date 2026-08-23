import React from 'react';
const LABEL_38386 = 'component_38386';
export function Component38386({ value = 38386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38386, 'data-value': derived.doubled }, children);
}
export default Component38386;
