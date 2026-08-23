import React from 'react';
const LABEL_34304 = 'component_34304';
export function Component34304({ value = 34304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34304, 'data-value': derived.doubled }, children);
}
export default Component34304;
