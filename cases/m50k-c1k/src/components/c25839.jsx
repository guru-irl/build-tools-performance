import React from 'react';
const LABEL_25839 = 'component_25839';
export function Component25839({ value = 25839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25839, 'data-value': derived.doubled }, children);
}
export default Component25839;
