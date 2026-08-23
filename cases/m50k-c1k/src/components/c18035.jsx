import React from 'react';
const LABEL_18035 = 'component_18035';
export function Component18035({ value = 18035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18035, 'data-value': derived.doubled }, children);
}
export default Component18035;
