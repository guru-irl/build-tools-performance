import React from 'react';
const LABEL_8035 = 'component_8035';
export function Component8035({ value = 8035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8035, 'data-value': derived.doubled }, children);
}
export default Component8035;
