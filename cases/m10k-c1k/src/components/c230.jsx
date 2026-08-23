import React from 'react';
const LABEL_230 = 'component_230';
export function Component230({ value = 230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_230, 'data-value': derived.doubled }, children);
}
export default Component230;
