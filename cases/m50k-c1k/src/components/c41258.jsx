import React from 'react';
const LABEL_41258 = 'component_41258';
export function Component41258({ value = 41258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41258, 'data-value': derived.doubled }, children);
}
export default Component41258;
