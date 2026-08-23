import React from 'react';
const LABEL_35420 = 'component_35420';
export function Component35420({ value = 35420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35420, 'data-value': derived.doubled }, children);
}
export default Component35420;
