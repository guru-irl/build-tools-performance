import React from 'react';
const LABEL_26035 = 'component_26035';
export function Component26035({ value = 26035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26035, 'data-value': derived.doubled }, children);
}
export default Component26035;
