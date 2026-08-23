import React from 'react';
const LABEL_6059 = 'component_6059';
export function Component6059({ value = 6059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6059, 'data-value': derived.doubled }, children);
}
export default Component6059;
