import React from 'react';
const LABEL_44295 = 'component_44295';
export function Component44295({ value = 44295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44295, 'data-value': derived.doubled }, children);
}
export default Component44295;
