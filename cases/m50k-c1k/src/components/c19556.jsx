import React from 'react';
const LABEL_19556 = 'component_19556';
export function Component19556({ value = 19556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19556, 'data-value': derived.doubled }, children);
}
export default Component19556;
