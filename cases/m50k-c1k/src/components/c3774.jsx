import React from 'react';
const LABEL_3774 = 'component_3774';
export function Component3774({ value = 3774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3774, 'data-value': derived.doubled }, children);
}
export default Component3774;
