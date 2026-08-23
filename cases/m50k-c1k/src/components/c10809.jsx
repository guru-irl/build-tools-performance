import React from 'react';
const LABEL_10809 = 'component_10809';
export function Component10809({ value = 10809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10809, 'data-value': derived.doubled }, children);
}
export default Component10809;
