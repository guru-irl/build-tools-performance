import React from 'react';
const LABEL_26420 = 'component_26420';
export function Component26420({ value = 26420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26420, 'data-value': derived.doubled }, children);
}
export default Component26420;
