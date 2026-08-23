import React from 'react';
const LABEL_18944 = 'component_18944';
export function Component18944({ value = 18944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18944, 'data-value': derived.doubled }, children);
}
export default Component18944;
