import React from 'react';
const LABEL_37414 = 'component_37414';
export function Component37414({ value = 37414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37414, 'data-value': derived.doubled }, children);
}
export default Component37414;
