import React from 'react';
const LABEL_16735 = 'component_16735';
export function Component16735({ value = 16735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16735, 'data-value': derived.doubled }, children);
}
export default Component16735;
