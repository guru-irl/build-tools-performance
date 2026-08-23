import React from 'react';
const LABEL_19077 = 'component_19077';
export function Component19077({ value = 19077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19077, 'data-value': derived.doubled }, children);
}
export default Component19077;
