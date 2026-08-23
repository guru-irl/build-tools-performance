import React from 'react';
const LABEL_42016 = 'component_42016';
export function Component42016({ value = 42016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42016, 'data-value': derived.doubled }, children);
}
export default Component42016;
