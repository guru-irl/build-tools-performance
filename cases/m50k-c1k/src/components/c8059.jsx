import React from 'react';
const LABEL_8059 = 'component_8059';
export function Component8059({ value = 8059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8059, 'data-value': derived.doubled }, children);
}
export default Component8059;
