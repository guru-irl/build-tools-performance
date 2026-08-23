import React from 'react';
const LABEL_3144 = 'component_3144';
export function Component3144({ value = 3144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3144, 'data-value': derived.doubled }, children);
}
export default Component3144;
