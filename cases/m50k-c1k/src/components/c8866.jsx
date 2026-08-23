import React from 'react';
const LABEL_8866 = 'component_8866';
export function Component8866({ value = 8866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8866, 'data-value': derived.doubled }, children);
}
export default Component8866;
