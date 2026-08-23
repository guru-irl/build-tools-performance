import React from 'react';
const LABEL_41440 = 'component_41440';
export function Component41440({ value = 41440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41440, 'data-value': derived.doubled }, children);
}
export default Component41440;
