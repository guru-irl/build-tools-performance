import React from 'react';
const LABEL_18774 = 'component_18774';
export function Component18774({ value = 18774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18774, 'data-value': derived.doubled }, children);
}
export default Component18774;
